import styled from 'styled-components';

const SearchInputBox = styled.div`
	display: flex;
	border: 1px solid #ebebeb;
	color: black;
	align-items: center;
	padding: 15px 0px 15px 20px;
	background-color: white;
	border-radius: 4px;

	::placeholder,
	::-webkit-input-placeholder {
		color: #a5a5a5;
		font-family: 'Noto Sans';
		font-weight: 400;
		font-size: 18px;
	}
`;

const SearchBar = () => {
	return (
		<SearchInputBox>
			<img src='/Icons/Basic/Search.svg' />
			<input
				style={{
					border: 0,
					fontWeight: 400,
					marginLeft: '8px',
					fontSize: '18px',
				}}
				placeholder='search here'
			/>
		</SearchInputBox>
	);
};

export default SearchBar;
