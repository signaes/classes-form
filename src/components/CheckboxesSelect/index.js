//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ErrorDisplay from '../ErrorDisplay/index';
import StyledCheckboxesSelect from './styles';

type Props = {
  name: string,
  label: string,
  className?: string,
  placeholder?: string,
  errors: Object,
  touched: Object,
  options: Array<Object>,
};

type State = {
  choicesDic: Object,
  choicesArray: [],
  choicesString: string,
};

type Choice = {
  checked: boolean,
  index: number,
  value: string,
};

class CheckboxesSelect extends React.PureComponent<Props, State> {
  state: State = {
    choicesDic: {},
    choicesArray: [],
    choicesString: '',
  }

  handleChange = (e: Object) => {
    const { target } = e;
    const { checked, value } = target;

    let choicesDic = {...this.state.choicesDic};
    choicesDic[value] = {
      checked,
      index: parseInt(target.dataset.index, 10),
      value,
    };

    let choicesArray = [];

    for (let v in choicesDic) {
      if (choicesDic[v].checked) {
        choicesArray.push(choicesDic[v]);
      }
    }

    choicesArray.sort((a: Choice, b: Choice) => a.index - b.index);

    const choicesString = choicesArray.map(c => c.value).join('-');

    this.setState({ choicesDic, choicesArray, choicesString });
  }

  render() {
    const {
      name,
      label,
      className = '',
      placeholder = '',
      errors,
      touched,
      options,
    } = this.props;

    console.log(this.state);

    return (
      <StyledCheckboxesSelect className="checkboxes-select">
        <label
          className="checkboxes-select__label"
          htmlFor={name}>
        { label }
        </label>
        <div className="checkboxes-select__field">
          <div className="checkboxes-select__value">
            { this.state.choicesString
              ? this.state.choicesString
              : placeholder }
          </div>
          <div className="checkboxes-select__options">
            { options.map(({ value, label }, index) => (
              <label
                htmlFor={value}
                className="checkboxes-select__option"
                key={`${index}-${value}`}>
                <input
                  type="checkbox"
                  id={value}
                  name={name}
                  onChange={this.handleChange}
                  data-index={index}
                  value={value} />
                <span className="checkboxes-select__option__label">{ label }</span>
              </label>
            )) }
          </div>
        </div>
        <ErrorDisplay errors={errors} touched={touched} fieldName={name} />
      </StyledCheckboxesSelect>
    );
  }
}

CheckboxesSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default CheckboxesSelect;
