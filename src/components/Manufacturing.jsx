export const Manufacturing = (props) => {
    const {manufacturings,onClickCompleteManufacturing,onClickBackManufacturings,onClickDeleteManufacturing} = props;
    return(
        <div className="manufacturing-area">
			<h1>製造中</h1>
			<ul className="manufacturing-list">
				{manufacturings.map((matter, index) => {
					return (
						<div key={matter} className="list-row">
							<li>{matter}</li>
							<button onClick={() => onClickCompleteManufacturing(index)}>
								完了
							</button>
							<button onClick={() => onClickBackManufacturings(index)}>
								戻る
							</button>
							<button onClick={() => onClickDeleteManufacturing(index)}>
								削除
							</button>
						</div>
					);
				})}
			</ul>
		</div>
    )
}