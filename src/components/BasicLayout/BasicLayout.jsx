import styles from './basic-layout.module.scss';

const BasicLayout = (props) => {
	return (
		<div id='layout' className={styles.layout_wrapper}>
			{props.children}
		</div>
	);
};

export default BasicLayout;
