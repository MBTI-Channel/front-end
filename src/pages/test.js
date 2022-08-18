import CommentBar from '../../src/components/elements/bar/CommentBar';
import User from '../service/userService';

const Test = () => {
	User.comment(1, 1, 10).then((res) => console.log(res));
	return <CommentBar isClicked={true} />;
};

export default Test;
