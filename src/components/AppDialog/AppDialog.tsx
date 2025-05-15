'use client';
import { useRef } from 'react';
import styles from './AppDialog.module.scss';

export const AppDialog = () => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const handleShowModal = () => {
		dialogRef.current?.showModal();
		document.body.style.overflow = 'hidden';
	};
	const handleCloseModal = () => {
		dialogRef.current?.close();
		document.body.style.overflow = '';
	};
	return (
		<>
			<button type="button" onClick={handleShowModal}>
				ダイアログボタン
			</button>
			<dialog ref={dialogRef} className={styles.dialog}>
				<div className={styles.inner}>
					<h1>{'ダイアログテスト'.repeat(300)}</h1>
					<hr />
					<button type="button" onClick={handleCloseModal}>
						ダイアログ閉じる
					</button>
				</div>
			</dialog>
		</>
	);
};
