import React, {forwardRef} from 'react';
import Animated from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Keyboard, Pressable, StyleSheet, Text, TextInput} from 'react-native';

import SearchItem from './SearchItem';
import CountryItem from './CountryItem';
import {typography} from '@utils/typography';
import {COUNTRIES, SEARCH_COUNTRIES} from './data';
import {HEIGHT, isIOS, WIDTH} from '@utils/device';
import {TRenderCountryItem, TRenderSearchItem, TWhereTo} from './types';

const AnimPressable = Animated.createAnimatedComponent(Pressable);

const WhereTo = forwardRef<TextInput, TWhereTo>(
  (
    {
      country,
      setCountry,
      animateWhen,
      animateWhereToInput,
      opacityWhereToBold,
      opacityOpenWhoStyle,
      innerInputWhereToFocused,
      listSearchStyle,
      listOpacityTranslate,
    },
    ref,
  ) => {
    const insets = useSafeAreaInsets();

    const top = insets.top > 40 ? insets.top : 30;
    const bottom = insets.bottom;

    const renderItem = React.useCallback(
      ({item, index}: TRenderCountryItem) => {
        const isSelected = item.label === country;

        return (
          <CountryItem
            item={item}
            index={index}
            isSelected={isSelected}
            setCountry={setCountry}
            animateWhen={animateWhen}
          />
        );
      },
      [country],
    );

    const renderSearchItem = React.useCallback(
      ({item, index}: TRenderSearchItem) => (
        <SearchItem
          key={`searchItem-${index}`}
          date={item.date}
          guests={item.guests}
          place={item.place}
        />
      ),
      [],
    );

    return (
      <>
        <Animated.Text
          style={[styles.boldWhere, styles.padLeft24, opacityWhereToBold]}>
          Where to?
        </Animated.Text>
        <Animated.View
          style={[
            styles.absolute,
            styles.row,
            styles.justifyBtn,
            styles.widthPadTop12,
            opacityOpenWhoStyle,
          ]}>
          <Text style={[styles.fontW500, styles.color100, styles.padLeft24]}>
            Where
          </Text>
          <Text style={[styles.fontW500, styles.country]}>{country}</Text>
        </Animated.View>
        <AnimPressable
          onPress={animateWhereToInput}
          style={[
            styles.row,
            styles.inputContainer,
            styles.marLeft24,
            innerInputWhereToFocused,
          ]}>
          <Entypo size={20} style={styles.lens2} name="magnifying-glass" />
          <TextInput
            ref={ref}
            style={[styles.fontW500]}
            onFocus={animateWhereToInput}
            placeholder="Search destinations"
            placeholderTextColor={'rgb(100,100,100)'}
          />
        </AnimPressable>
        <Animated.FlatList
          horizontal
          data={COUNTRIES}
          renderItem={renderItem}
          style={listOpacityTranslate}
          showsHorizontalScrollIndicator={false}
        />
        <Animated.View
          style={[
            styles.marLeft24,
            styles.searchListContainer,
            listSearchStyle,
            {height: HEIGHT - top - bottom - 156},
          ]}>
          <Text style={[styles.marBot24, styles.fontW500, styles.font16]}>
            Recent searches
          </Text>
          <FlatList
            data={SEARCH_COUNTRIES}
            renderItem={renderSearchItem}
            onScroll={() => Keyboard.dismiss()}
            showsVerticalScrollIndicator={false}
          />
        </Animated.View>
      </>
    );
  },
);

export default WhereTo;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  absolute: {
    position: 'absolute',
  },
  boldWhere: {
    fontSize: 28,
    fontFamily: typography.bold,
  },
  marLeft24: {
    marginLeft: 24,
  },
  searchListContainer: {
    position: 'absolute',
    top: 104,
    width: WIDTH,
  },
  lens2: {
    paddingRight: 20,
    color: 'black',
  },
  marBot24: {
    marginBottom: 24,
  },
  fontW500: {
    fontWeight: '500',
  },
  inputContainer: {
    marginTop: 24,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: isIOS ? 20 : 6,
    paddingHorizontal: 20,
    width: WIDTH - 72,
  },
  justifyBtn: {
    justifyContent: 'space-between',
  },
  widthPadTop12: {
    width: WIDTH - 56,
    paddingTop: 12,
  },
  color100: {
    color: 'rgb(100,100,100)',
    fontFamily: typography.medium,
  },
  padLeft24: {
    paddingLeft: 24,
  },
  font16: {
    fontSize: 16,
    fontFamily: typography.medium,
  },
  country: {
    fontFamily: typography.semiBold,
  },
});