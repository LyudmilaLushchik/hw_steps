import PropTypes from 'prop-types';

function StepCounterTable({ walks, onDelete }) {
    return (
        <>
            <div className='step'>
                <div className='step_date'>Дата (ДД.ММ.ГГГГ)</div>
                <div className='step_distance'>Пройдено км</div>
                <div className='actions'>Действия</div>
            </div>
            <ul className='steps'>
            {walks.map((o) => (
                <li className='step' key={o.id}>
                    <div>{new Date(o.date).toLocaleDateString()}</div>
                    <div>{o.distance}</div>
                    <button className='btn delete-btn' onClick={() => onDelete(o.id)}>
                      ✘
                    </button>
                </li>
            ))}
            </ul>
        </>
    );
  }
  
  StepCounterTable.propTypes = {
    walks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        date: PropTypes.string,
        distance: PropTypes.number,
      })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

export default StepCounterTable;