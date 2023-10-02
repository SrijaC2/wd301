// Comment types for fetching comments
export interface Comment {
  id: number;
  description: string;
  task_id: number;
  owner: number;
  userName: string; // Name of the user who made the comment
  timestamp: string; // Formatted timestamp of when the comment was made
}

export type CommentPayload = {
  description: string;
  task_id: number;
  owner: number;
  userName: string; 
  timestamp: string;
};

// TaskListState with comment-related properties
export interface CommentListState {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  comments: Comment[]; // An array to store fetched comments
}

// TaskListAvailableAction with comment-related action types
export enum CommentAvailableAction {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

  CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
  CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
  CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}

export type CommentActions =
  | { type: CommentAvailableAction.FETCH_COMMENTS_REQUEST }
  | { type: CommentAvailableAction.FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: CommentAvailableAction.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentAvailableAction.CREATE_COMMENT_REQUEST }
  | { type: CommentAvailableAction.CREATE_COMMENT_SUCCESS }
  | { type: CommentAvailableAction.CREATE_COMMENT_FAILURE; payload: string };
