import { View, Text } from "@tarojs/components";
import { useState, useMemo } from "react";
import { AtForm, AtInput, AtButton, AtList, AtListItem, AtIcon } from "taro-ui";
import Taro from "@tarojs/taro";
import "./account.scss";

export default function Account() {
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);

  // 提交事务
  const handleSubmit = () => {
    if (!transactionName || !amount) {
      Taro.showToast({
        title: "请输入完整信息",
        icon: "none",
      });
      return;
    }

    const newTransaction = {
      id: Date.now(),
      name: transactionName,
      amount: parseFloat(amount),
    };

    setTransactions([...transactions, newTransaction]);
    setTransactionName("");
    setAmount("");
  };

  // 删除单个事务
  const handleDelete = (id, e) => {
    e.stopPropagation(); // 阻止事件冒泡
    setTransactions(transactions.filter((item) => item.id !== id));
    Taro.showToast({
      title: "删除成功",
      icon: "success",
      duration: 2000,
    });
  };

  // 删除所有记录
  const handleDeleteAll = () => {
    Taro.showModal({
      title: "确认删除",
      content: "确定要删除所有记录吗？",
      success: (res) => {
        if (res.confirm) {
          setTransactions([]);
          Taro.showToast({
            title: "已清空所有记录",
            icon: "success",
            duration: 2000,
          });
        }
      },
    });
  };

  // 统计收入、支出和总计
  const statistics = useMemo(() => {
    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    const income = transactions.reduce(
      (sum, t) => (t.amount > 0 ? sum + t.amount : sum),
      0
    );
    const expense = Math.abs(
      transactions.reduce((sum, t) => (t.amount < 0 ? sum + t.amount : sum), 0)
    );
    return { total, income, expense };
  }, [transactions]);

  return (
    <View className="account-container">
      <View className="statistics">
        <View className="stat-item">
          <Text className="label">总计：</Text>
          <Text
            className={`value ${
              statistics.total >= 0 ? "positive" : "negative"
            }`}
          >
            {statistics.total >= 0 ? "+" : ""}
            {statistics.total}元
          </Text>
        </View>
        <View className="stat-item">
          <Text className="label">收入：</Text>
          <Text className="value positive">{statistics.income}元</Text>
        </View>
        <View className="stat-item">
          <Text className="label">支出：</Text>
          <Text className="value expense">{statistics.expense}元</Text>
        </View>
      </View>

      <AtForm>
        <AtInput
          name="transactionName"
          title="事务名称"
          type="text"
          placeholder="请输入事务名称"
          value={transactionName}
          onChange={setTransactionName}
        />
        <AtInput
          name="amount"
          title="金额"
          type="number"
          placeholder="收入为正数，支出为负数"
          value={amount}
          onChange={setAmount}
        />
        <AtButton type="primary" onClick={handleSubmit}>
          记录
        </AtButton>
      </AtForm>

      <AtList>
        {transactions.map((transaction) => (
          <AtListItem
            key={transaction.id}
            title={transaction.name}
            extraText={`${transaction.amount > 0 ? "+" : ""}${
              transaction.amount
            }元`}
            note={transaction.amount > 0 ? "收入" : "支出"}
            arrow="right"
            onClick={() => handleDelete(transaction.id)} // 删除事务
            renderExtra={
              <View
                className="delete-icon"
                onClick={(e) => handleDelete(transaction.id, e)}
              >
                <AtIcon value="close" size="20" color="#FF4949" />
              </View>
            }
          />
        ))}
      </AtList>

      {/* 固定在页面底部的删除所有记录按钮 */}
      {transactions.length > 0 && (
        <View className="fixed-bottom-btn">
          <AtButton
            type="secondary"
            onClick={handleDeleteAll}
            customStyle={{ margin: "20px 0" }}
          >
            删除所有记录
          </AtButton>
        </View>
      )}
    </View>
  );
}
