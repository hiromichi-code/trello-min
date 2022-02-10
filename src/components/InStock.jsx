export const InStock = (props) => {
    const {inStockMatters,onClickCompleteMatter,onClickStockDeleteMatter} = props;
    return(
        <div className="inStock-area">
			<h1>入荷済</h1>
			<ul className="inStock-rist">
				{inStockMatters.map((matter, index) => {
					return (
						<div key={matter} className="list-row">
							<li>{matter}</li>
							<button onClick={() => onClickCompleteMatter(index)}>
								完了
							</button>
							<button onClick={() => onClickStockDeleteMatter(index)}>
								削除
							</button>
						</div>
					);
				})}
			</ul>
		</div>
    )
}