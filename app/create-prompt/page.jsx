"use client";
import Form from "@/components/Form";
import { set } from "mongoose";
import { useState } from "react";

function CreatePrompt() {
  const [post, setPost] = useState({
    prompt: " ",
    tag: " ",
  });
  const [submitting, setSubmitting] = useState(false);

  async function createPrompt(e) {
    e.preventDefault();
    try {
      const response = await fetch("api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          id: session?.user.id,
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log("Create New Prompt Error: ", error);
    } finally {
      setSubmitting(false);
    }
  }

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
