import React from 'react';
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

export default class GiftCard extends React.Component {
	
	render() {

		return (

			<Image className="gift-card" src={this.props.merchantImage} rounded/> /* Assume that the merchantImage is contain */
		)

	}

}

