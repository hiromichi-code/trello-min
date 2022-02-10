export const Input = (props) => {
    const {matters,onChangeMatter,onClickAdd} = props;
    return(
        <div className="input-area">
			<input
				value={matters}
				placeholder="案件名を入力"
				onChange={onChangeMatter}
			/>
			<button onClick={onClickAdd}>追加</button>
		</div>
    )
}