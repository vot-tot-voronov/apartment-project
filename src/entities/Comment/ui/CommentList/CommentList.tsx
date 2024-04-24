import { CommentItem } from '../CommentItem/CommentItem';
import classes from './CommentList.module.scss';

const mockedComment = {
  id: '1',
  text: 'text text text',
  user: {
    id: '1',
    username: 'Иван Иванов',
  },
};

export const CommentList = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Комментарии</h2>
      <div className={classes.commentList}>
        <CommentItem comment={mockedComment} />
        <CommentItem comment={mockedComment} />
      </div>
    </div>
  );
};
