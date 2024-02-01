"use client";
import Form from "@/components/Form";
import { useState } from "react";

function CreatePrompt() {
  const [post, setPost] = useState({
    prompt: " ",
    tag: " ",
  });
  const [submitting, setSubmitting] = useState(false);

  async function createPrompt(e) {}

  return (
    <Form
      type="Create"
      post={post}
      submitting={submitting}
      setPost={setPost}
      handleSubmit={createPrompt}
    />
  );
}

export default CreatePrompt;
