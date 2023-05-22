import PropTypes from 'prop-types';
import {
  StatisticSection,
  StatisticTitle,
  StatisticList,
  StatisticListItem,
} from './Statistic.styled';
const Statistic = ({ stats, title }) => {
  return (
    <StatisticSection class="statistics">
      <StatisticTitle class="title">{title || 'Upload stats'}</StatisticTitle>
      <StatisticList class="stat-list">
        {stats.map(e => (
  
  <StatisticListItem style={{background:rundomColorGenerator()}} key={e.id} class="item">
            <span class="label">{e.label}</span>
            <span class="percentage">{e.percentage}%</span>
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
  ).isRequired,
};
function rundomColorGenerator() {
    let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
  }
  
export default Statistic;
