import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import commentStore from "../store/commentStore";

const CommentSection = observer(({ dishTitle }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const validateComment = () => {
    // Checking the length of the comment (e.g. minimum 5 characters)
    if (comment.length < 5) {
      setError("Комментарий слишком короткий. Минимум 5 символов.");
      return false;
    }

    // Check for at least one word (use Unicode for all languages)
    const wordPattern = /\p{L}+/u;
    if (!wordPattern.test(comment)) {
      setError("Комментарий должен содержать хотя бы одно слово.");
      return false;
    }

    //Check for letters, numbers and spaces only (Unicode for all languages)
    const validTextPattern = /^[\p{L}\d\s]+$/u; // Letters, numbers and spaces are allowed
    if (!validTextPattern.test(comment)) {
      setError("Комментарий должен состоять только из букв и цифр.");
      return false;
    }

    // Character uniqueness check (e.g. more than 4 different characters)
    const uniqueChars = [...new Set(comment.toLowerCase().replace(/\s/g, ""))];
    if (uniqueChars.length < 4) {
      setError("Комментарий должен содержать больше уникальных символов.");
      return false;
    }

    // If all checks are passed, no errors
    setError("");
    return true;
  };

  const handleAddComment = (e) => {
    e.preventDefault();

    // Validating a comment before adding it
    if (validateComment()) {
      commentStore.addComment(dishTitle, { name, surname, text: comment });
      setName("");
      setSurname("");
      setComment("");
    }
  };

  const handleDeleteComment = (commentId) => {
    commentStore.deleteComment(dishTitle, commentId);
  };

  return (
    <div className="comments-section mt-6 pb-7">
      <h2 className="font-bold text-xl mb-4">Комментарии</h2>

      {/* Form for adding a comment */}
      <form onSubmit={handleAddComment} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Имя"
          className="p-2 border border-gray-300 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Фамилия"
          className="p-2 border border-gray-300 rounded w-full"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <textarea
          name="comment"
          placeholder="Оставьте комментарий"
          className="p-2 border border-gray-300 rounded"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          style={{ width: "50%", minHeight: "100px" }}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Добавить комментарий
        </button>
      </form>

      {/* Validation error display */}
      {error && <div className="text-red-500 mt-2">{error}</div>}

      <ul className="mt-4">
        {commentStore.getComments(dishTitle).map((comment) => (
          <li
            key={comment.id}
            className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded"
          >
            <div>
              <strong>
                {comment.name} {comment.surname}:
              </strong>{" "}
              {comment.text}
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
              onClick={() => handleDeleteComment(comment.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default CommentSection;
