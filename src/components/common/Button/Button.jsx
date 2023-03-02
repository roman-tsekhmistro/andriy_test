import styles from './button.module.scss';

const Button = ({ form }) => (
	<input className={styles.btn} type='submit' form={form} value='Create' />
);

export default Button;
