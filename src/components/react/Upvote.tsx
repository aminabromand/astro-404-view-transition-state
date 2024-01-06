import { useStore } from '@nanostores/react';
import { upvoteCountStore } from "../../stores/upvotes";

export const Upvote = () => {
  const upvoteCount = useStore(upvoteCountStore);

  return (
    <div>
      hello, count is: <strong>{upvoteCount}</strong>
      <br />
      <button onClick={() => {
        console.log('upvoteCount')
        console.log(upvoteCount)
        upvoteCountStore.set(upvoteCount + 1)
      }}>increase</button>
    </div>
  );
};
