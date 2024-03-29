import Link from "next/link";

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompt with the world, and let your imagination
        run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="prompt">
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Your AI Prompt
          </span>
          <textarea
            className="form_textarea"
            value={post.prompt}
            placeholder="Write your prompt here..."
            required
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          />
        </label>
        <label htmlFor="tag">
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Tag{" "}
          </span>
          <span className="font-normal">
            (#copyWriting, #webdevelopment, #design, ...)
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            placeholder="#tag"
            className="form_input"
          />
        </label>
        <div className="flex-end gap-4 mx-3 mb-5">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 bg-primary-orange text-sm text-white rounded-full"
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
