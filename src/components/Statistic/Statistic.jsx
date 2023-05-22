import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
} from './Statistic.styled';
const Statistic = ({ stats, title }) => {
  return (
    <StatisticSection className="statistics">
      <StatisticTitle className="title">{title || 'Upload stats'}</StatisticTitle>
      <StatisticList className="stat-list">
        {stats.map(e => (
  
  <StatisticListItem style={{background:rundomColorGenerator()}} key={e.id} className="item">
            <span className="label">{e.label}</span>
            <span className="percentage">{e.percentage}%</span>
          </StatisticListItem>
        ))}
      </StatisticList>
    </StatisticSection>
  );
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  )
};
function rundomColorGenerator() {
    let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }
  
export default Statistic;
