import s from './favorite-filter.module.css';

interface Props {
  onFiltered?: () => void;
  onNonFiltered?: () => void;
}

export function FavoriteFilter(props: Props) {
  const { onFiltered, onNonFiltered } = props;

  return (
    <div className={s.main}>
      <h4>Отображать только избранные товары ?</h4>

      <div className={s.btns}>
        <button onClick={onFiltered}>Да</button>
        <button onClick={onNonFiltered}>Нет</button>
      </div>
    </div>
  );
}
