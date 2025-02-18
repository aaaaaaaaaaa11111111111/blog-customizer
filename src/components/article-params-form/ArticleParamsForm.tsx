import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import {
	ArticleStateType,
	fontFamilyOptions,
	OptionType,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';

type ArticleParamsFormProps = {
	appState: ArticleStateType;
	setAppState: (props: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	appState,
	setAppState,
}: ArticleParamsFormProps) => {
	const [panelState, setPanelState] = useState<boolean>(false);
	const [formState, setFormState] = useState(appState);

	const handleFormChange =
		(option: keyof ArticleStateType) => (value: OptionType) => {
			setFormState((prevState) => ({
				...prevState,
				[option]: value,
			}));
		};

	const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setAppState(formState);
		setPanelState(false);
	};

	return (
		<>
			<ArrowButton
				isOpen={panelState}
				onClick={() => setPanelState(!panelState)}
			/>
			<aside
				className={clsx(styles.container, panelState && styles.container_open)}>
				<form className={styles.form} onSubmit={formSubmit}>
					<Text size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleFormChange('fontFamilyOption')}
						title='Шрифт'
					/>
					<RadioGroup
						name={formState.fontSizeOption.className}
						selected={formState.fontSizeOption}
						options={fontSizeOptions}
						onChange={handleFormChange('fontSizeOption')}
						title={'размер шрифта'}></RadioGroup>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
