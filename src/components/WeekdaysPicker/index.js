//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ErrorDisplay from '../ErrorDisplay/index';
import { WORKING_WEEKDAYS } from '../../constants/weekdays';
import StyledWeekdaysPicker from './styles';
import CheckboxButton from '../CheckboxButton/index';

type Props = {
  name: string,
  label: string,
  className?: string,
  errors: Object,
  touched: Object,
  availableDaysByHours: Array<Object>,
};

type State = {
  choicesDic: Object,
  choicesArray: [],
};

type Choice = {
  checked: boolean,
  index: number,
  value: string,
};

const isDayAvailable = (days, day) => days.map(d => d.id).indexOf(day) > -1;

class WeekdaysPicker extends React.PureComponent<Props, State> {
  state: State = {
    choicesDic: {},
    choicesArray: [],
    choicesString: '',
  }

  handleChange = (e: Object) => {
    const { target } = e;
    const { checked, value } = target;
    const { index, label } = target.dataset;

    let choicesDic = {...this.state.choicesDic};
    choicesDic[value] = {
      checked,
      index: parseInt(index, 10),
      value,
      label,
    };

    let choicesArray = [];

    for (let v in choicesDic) {
      if (choicesDic[v].checked) {
        choicesArray.push(choicesDic[v]);
      }
    }

    choicesArray.sort((a: Choice, b: Choice) => a.index - b.index);

    this.setState({ choicesDic, choicesArray });
  }

  render() {
    const {
      name,
      label,
      className = '',
      errors,
      touched,
      availableDaysByHours,
    } = this.props;

    console.log(this.state);

    return (
      <StyledWeekdaysPicker
        className="weekdays-picker">
        <label className="weekdays-picker__label">
          { label }
        </label>
        <div className="weekdays-picker__field">

          <div className="weekdays-picker__rows">
            { availableDaysByHours.map(({ range, days }, index) => (
              <div className="weekdays-picker__row" key={`${index}-${range.join('-')}`}>
                { WORKING_WEEKDAYS.map((weekday, index) => (
                  <CheckboxButton
                    value={weekday.concat('-', range.join('-'))}
                    label={weekday}
                    className="weekdays-picker__option"
                    name={range.join('-')}
                    onChange={this.handleChange}
                    data-index={index}
                    isDisabled={isDayAvailable(days, weekday)}
                    key={`${index}-${weekday}`}
                  />
                )) }
                <span className="weekdays-picker__range">
                  <span className="weekdays-picker__time">
                    { range.join(' to ') }
                  </span>
                </span>
              </div>
            )) }
          </div>
        </div>
        <ErrorDisplay errors={errors} touched={touched} fieldName={name} />
      </StyledWeekdaysPicker>
    );
  }
}

WeekdaysPicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  availableDaysByHours: PropTypes.arrayOf(PropTypes.shape({
    range: PropTypes.arrayOf(PropTypes.string).isRequired,
    days: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default WeekdaysPicker;
