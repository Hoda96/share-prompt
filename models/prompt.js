const { Schema, model, models } = require("mongoose");

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "tag is required"],
  },
});

export const Prompt = models.prompt || model("Prompt", PromptSchema);
