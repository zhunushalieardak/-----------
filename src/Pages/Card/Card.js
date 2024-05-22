import React from 'react'
import cl from "./Card.module.css"

const Card = ({pr, id}) => {
	return (
		<div className={cl.container}>
			<img src={pr.products_img} alt="" />
			<h2 className={cl.products_name}>{pr.name_products}</h2>
			<div className="description">{pr.description}</div>
			<h3 className={cl.price}>{pr.price}</h3>
		</div>
	)
}

export default Card
