import React from 'react';
import { mount } from 'enzyme';
import LocationItem from '../LocationItem';

describe('<LocationItem />', () => {
  describe('with country', () => {
    test('render location name and map-marker icon', () => {
      const location = {
        id: 1,
        name: 'Rzeszów'
      }

      const wrapper = mount(
        <LocationItem location={location} className='font-weight-bold' />
      )

      expect(wrapper).toIncludeText(location.name);
      expect(wrapper.find('Icon[name="map-marker"]')).toExist();
    })
  });

  describe('without country', () => {
    test('render location name and country flag', () => {
      const location = {
        id: 1,
        name: 'Rzeszów',
        country: 'pl'
      }

      const wrapper = mount(
        <LocationItem location={location} className='font-weight-bold' />
      )

      expect(wrapper).toIncludeText(location.name);
      expect(wrapper.find('FlagIcon[code="pl"]')).toExist();
    })
  });
});


