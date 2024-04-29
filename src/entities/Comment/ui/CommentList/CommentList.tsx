import clsx from 'clsx';
import { memo } from 'react';

import { CommentItemType } from '../../model/types/commentTypes';
import { CommentItem } from '../CommentItem/CommentItem';
import classes from './CommentList.module.scss';

import { Loader } from '@/shared/ui';

interface ICommentListProps {
  isLoading: boolean;
  comments?: Array<CommentItemType>;
  error?: string;
}

export const CommentList = memo(function CommentListComponent({ isLoading, comments, error }: ICommentListProps) {
  if (isLoading) {
    return (
      <div className={clsx(classes.container, classes.center)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classes.container}>
        <h2 className={classes.title}>Комментарии</h2>
        <p className={classes.errorText}>{error}</p>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Комментарии</h2>
      <div className={classes.commentList}>
        {comments && comments.length > 0 ? (
          comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
        ) : (
          <p>Комментарии отсутствуют</p>
        )}
      </div>
    </div>
  );
});
