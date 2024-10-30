import { makeAutoObservable } from "mobx";

class CommentStore {
  comments = {};

  constructor() {
    makeAutoObservable(this);
  }

  addComment(dishTitle, comment) {
    if (!this.comments[dishTitle]) {
      this.comments[dishTitle] = [];
    }
    this.comments[dishTitle].push({
      ...comment,
      id: Date.now(), // Generate a unique ID
    });
  }

  deleteComment(dishTitle, commentId) {
    if (this.comments[dishTitle]) {
      this.comments[dishTitle] = this.comments[dishTitle].filter(
        (comment) => comment.id !== commentId
      );
    }
  }

  getComments(dishTitle) {
    return this.comments[dishTitle] || [];
  }
}

const commentStore = new CommentStore();
export default commentStore;
