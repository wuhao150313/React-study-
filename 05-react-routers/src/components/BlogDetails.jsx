import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";
import { Card, Typography, Row, Col, Image, List, Tag } from "antd";

const { Title, Text } = Typography;

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Card bordered={false} style={{ borderRadius: "8px" }}>
        <Title level={2}>{blog.title}</Title>
        <Row gutter={16}>
          <Col span={24} md={12}>
            <Image
              src={blog.image}
              alt={blog.title}
              style={{ width: "100%", borderRadius: "8px" }}
              preview={false}
            />
          </Col>

          <Col span={24} md={12}>
            <Text strong className="blog-content">
              {blog.content}
            </Text>

            <div style={{ marginTop: "16px" }}>
              <Text strong>Author:</Text> {blog.author}
            </div>

            <div style={{ marginTop: "8px" }}>
              <Text strong>Views:</Text> {blog.views}
            </div>

            <div style={{ marginTop: "8px" }}>
              <Text strong>Favorites:</Text> {blog.bookmarks}
            </div>

            <div style={{ marginTop: "8px" }}>
              <Text strong>Likes:</Text> {blog.likes}
            </div>

            <div style={{ marginTop: "16px" }}>
              <Text strong>Tags:</Text>
              <List
                itemLayout="horizontal"
                dataSource={blog.tags}
                renderItem={(tag) => (
                  <List.Item>
                    <Tag color="blue">{tag}</Tag>
                  </List.Item>
                )}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default BlogDetails;
