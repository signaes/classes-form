//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ErrorDisplay from '../ErrorDisplay/index';
import Checkbox from '../Checkbox/index';
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
  isOpened: any,
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
    isOpened: null,
  }

  toggle = () => this.setState((previousState: Object) => ({
    isOpened: !previousState.isOpened,
  }));

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

    const choicesString = choicesArray.map(c => c.label).join('-');

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
      <StyledCheckboxesSelect
        className="checkboxes-select"
        data-opened={this.state.isOpened}>
        <label
          className="checkboxes-select__label"
          htmlFor={name}>
        { label }
        </label>
        <div className="checkboxes-select__field">
          <div className="checkboxes-select__value" onClick={this.toggle}>
            { this.state.choicesString
              ? this.state.choicesString
              : placeholder }
          </div>
          <div
            className="checkboxes-select__options"
            data-opened={this.state.isOpened}>
            { options.map(({ value, label }, index) => (
              <Checkbox
                value={value}
                label={label}
                className="checkboxes-select__option"
                name={name}
                onChange={this.handleChange}
                data-index={index}
                key={`${index}-${value}`}
              />
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
