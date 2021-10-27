import { FC, FormEvent, useState } from "react";
import { Redirect } from "react-router";
import { createDream } from "../../actions/dreamActions";

const CreateDream: FC = () => {
  const [created, setCreated] = useState(false);
  const [content, setContent] = useState("");

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    await createDream({ content });
    setCreated(true);
  };

  return created ? (
    <Redirect to="/dreams"></Redirect>
  ) : (
    <div className="max-w-7xl mx-auto">
      <div className="px-4 py-6">
        <div className="flex flex-col justify-center">
          <input
            v-model="postContent"
            type="text"
            className="
            rounded
            border-2 border-gray-600
            w-3/4
            my-4
            h-48
            mx-auto
            max-w-7xl
            p-2
          "
            value={content}
            onChange={(e) => setContent(e.currentTarget.value)}
          />
          <button
            className="
            w-20
            m-auto
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            p-2
            rounded
          "
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDream;
