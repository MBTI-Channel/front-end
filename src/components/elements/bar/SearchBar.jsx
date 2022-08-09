import styled from 'styled-components';

const SearchInputBox = styled.div.attrs((props) => ({
	width: props.width || '390px',
	height: props.height || '54px',
}))`
	display: flex;
	border: 1px solid #ebebeb;
	color: black;
	align-items: center;
	padding: 15px 0px 15px 20px;
	background-color: white;
	border-radius: 4px;
	width: ${(props) => props.width};
	height: ${(props) => props.height};

	& .search-box {
		border: 0;
		font-weight: 400;
		margin-left: 8px;
		font-size: 14px;
		width: 318px;
		height: 21px;
		line-height: 21px;
	}

	::placeholder,
	::-webkit-input-placeholder {
		color: #a5a5a5;
	}
`;

const SearchBar = () => {
	return (
		<SearchInputBox>
			<img src='/Icons/Basic/Search.svg' />
			<input className='search-box' placeholder='검색어를 입력해주세요.' />
		</SearchInputBox>
	);
};

export default SearchBar;
