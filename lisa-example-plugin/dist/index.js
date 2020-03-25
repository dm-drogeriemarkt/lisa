import React, { useContext } from 'react';
import { get, cloneDeep, remove } from 'lodash';
import { useQuery } from '@apollo/react-hooks';
import { HostsFormContext } from 'lisa-core/lib/Context';
import SelectInput from 'lisa-core/components/HostsForm/SelectInput';
import gql from 'graphql-tag';
import { HostsFormContext as HostsFormContext$1 } from 'lib/Context';

var hosts_form = {
	model_id: "Model",
	placeholders: {
		model_id: "Select Model"
	}
};
var locales = {
	hosts_form: hosts_form
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var MODELS_QUERY = gql`
  query {
    models {
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
  }
`;

const ModelSelectInput = ({ ...attrs
}) => {
  const {
    updateAttribute: handleChange,
    attributes: {
      modelId
    }
  } = useContext(HostsFormContext);
  const {
    loading,
    data
  } = useQuery(MODELS_QUERY);
  const models = get(data, 'models.edges', []).map(({
    node: {
      id,
      name
    }
  }) => {
    return {
      id,
      name
    };
  });
  return /*#__PURE__*/React.createElement(SelectInput, _extends({
    value: modelId,
    options: models,
    onChange: handleChange,
    loading: loading,
    allowEmpty: true
  }, attrs));
};

const SubnetSelectInput = ({
  components: [Component, components],
  ...attrs
}) => {
  const {
    attributes: {
      modelId
    }
  } = useContext(HostsFormContext$1);
  const disabled = attrs.disabled || !!modelId;
  return /*#__PURE__*/React.createElement(Component, _extends({
    components: components
  }, attrs, {
    disabled: disabled
  }));
};

const ServerConfigSelects = elements => {
  const data = cloneDeep(elements);
  const [subnetIdSelect] = remove(data, ({
    attributeName
  }) => attributeName === 'subnetId');
  return [...data, { ...subnetIdSelect,
    components: [SubnetSelectInput, ...subnetIdSelect.components]
  }, {
    attributeName: 'modelId',
    components: [ModelSelectInput]
  }];
};

const extensions = [{
  slot: 'HostsForm/ServerConfig/Selects',
  extension: ServerConfigSelects
}];
var index = {
  extensions,
  locales
};

export default index;
