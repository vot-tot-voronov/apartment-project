import { CommentItemType } from '../../model/types/commentTypes';
import classes from './CommentItem.module.scss';

import { Container } from '@/shared/ui';
import { UserIcon } from '@/shared/assets/icons';

interface ICommentItemProps {
  comment: CommentItemType;
}

export const CommentItem = ({ comment }: ICommentItemProps) => {
  return (
    <Container className={classes.container}>
      <div className={classes.userInfo}>
        <UserIcon className={classes.picture} />
        <span className={classes.username}>{comment.user.username}</span>
      </div>
      <p className={classes.text}>{comment.text}</p>
    </Container>
  );
};
