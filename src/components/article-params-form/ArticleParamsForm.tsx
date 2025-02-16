import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';

export const ArticleParamsForm = () => {
	const [panelState, setPanelState] = useState<boolean>(false);
	return (
		<>
			<ArrowButton
				isOpen={panelState}
				onClick={() => setPanelState(!panelState)}
			/>
			<aside
				className={clsx(styles.container, panelState && styles.container_open)}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
