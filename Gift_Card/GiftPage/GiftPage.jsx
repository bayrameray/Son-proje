import React from 'react';
import GiftCard from '../GiftCard/GiftCard';
import { Link } from 'react-router';
import { translate } from 'react-i18next';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import withProps from 'recompose/withProps';
import renameProp from 'recompose/renameProp';
import Page from 'panel/components/Page';
import LoadingSpinner from 'panel/components/LoadingSpinner';
import Details from 'panel/components/Details';
import Small from 'panel/components/Details/Small';
import DateView from 'panel/components/NewTable/DateView';
import Status from 'panel/components/NewTable/Status';
import styles from './styles.scss';
import GiftImage from '../hediye_ceki.png';


export default class GiftPage extends React.Component{
	
	render() {

		let giftCards = [1,2,3].map((value) => {

			return (

				<GiftCard merchantImage = "../hediye_ceki.png" merchantMax={100} merchantMin={10}/>
			)
		});


		return(

			<div>

				<h3>İndirim Çekinizi Seçinizi</h3>
				{giftCards}

			</div
		)
	}
}

