import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import commentStore from "../store/commentStore";

const CommentSection = observer(({ dishTitle }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const validateComment = () => {
    // Проверка длины комментария (например, минимум 5 символов)
    if (comment.length < 5) {
      setError("Комментарий слишком короткий. Минимум 5 символов.");
      return false;
    }

    // Проверка на наличие хотя бы одного слова (используем Unicode для всех языков)
    const wordPattern = /\p{L}+/u; // \p{L} соответствует любым буквам в Unicode
    if (!wordPattern.test(comment)) {
      setError("Комментарий должен содержать хотя бы одно слово.");
      return false;
    }

    // Проверка на содержание только букв, цифр и пробелов (Unicode для всех языков)
    const validTextPattern = /^[\p{L}\d\s]+$/u; // Разрешены буквы, цифры и пробелы
    if (!validTextPattern.test(comment)) {
      setError("Комментарий должен состоять только из букв и цифр.");
      return false;
    }

    // Проверка на уникальность символов (например, больше 3 разных символов)
    const uniqueChars = [...new Set(comment.toLowerCase().replace(/\s/g, ""))];
    if (uniqueChars.length < 4) {
      setError("Комментарий должен содержать больше уникальных символов.");
      return false;
    }

    // Если все проверки пройдены, ошибок нет
    setError("");
    return true;
  };

  const handleAddComment = (e) => {
    e.preventDefault();

    // Валидация комментария перед добавлением
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

      {/* Форма добавления комментария */}
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

      {/* Показ ошибки валидации, если есть */}
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
