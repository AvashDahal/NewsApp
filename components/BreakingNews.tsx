import { StyleSheet, Text, View, ViewToken, Dimensions } from 'react-native'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { Colors } from '@/constants/Colors'
import { FlatList } from 'react-native-gesture-handler'
import { NewsDataType } from '@/types'
import SliderItem from '@/components/SliderItem'
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import Pagination from '@/components/Pagination'

const { width: SCREEN_WIDTH } = Dimensions.get('window');

type Props = {
    newsList: Array<NewsDataType>
}

const BreakingNews = ({newsList}: Props) => {
    const [data, setData] = useState(newsList);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const scrollX = useSharedValue(0);
    const ref = useAnimatedRef<Animated.FlatList<any>>();

    // Sync state with prop updates
    useEffect(() => {
        setData(newsList);
    }, [newsList]);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        }
    });

    const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
        if (viewableItems.length > 0) {
            const firstVisibleItem = viewableItems[0];
            if (firstVisibleItem.index !== null && firstVisibleItem.index !== undefined) {
                const newIndex = Math.floor(firstVisibleItem.index % newsList.length);
                setPaginationIndex(newIndex);
            }
        }
    }, [newsList.length]);

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
        minimumViewTime: 10,
    }).current;

    const viewabilityConfigCallbackPairs = useRef([
        { viewabilityConfig, onViewableItemsChanged }
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Breaking News</Text>
            <View style={styles.sliderWrapper}>
                <Animated.FlatList
                    ref={ref}
                    data={data}
                    keyExtractor={(_, index) => `list_items${index}`}
                    renderItem={({ item, index }) => (
                        <SliderItem 
                            slideItem={item} 
                            index={index} 
                            scrollX={scrollX} 
                            width={SCREEN_WIDTH}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    snapToInterval={SCREEN_WIDTH}
                    decelerationRate="fast"
                    onScroll={onScrollHandler}
                    scrollEventThrottle={16}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => setData([...data, ...newsList])}
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                    getItemLayout={(_, index) => ({
                        length: SCREEN_WIDTH,
                        offset: index * SCREEN_WIDTH,
                        index,
                    })}
                />
                <Pagination 
                    items={newsList} 
                    scrollX={scrollX} 
                    paginationIndex={paginationIndex} 
                />
            </View>
        </View>
    );
};

export default BreakingNews;

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 14,
        fontWeight: "800",
        color: Colors.black,
        marginBottom: 10,
        marginLeft: 20,
    },
    sliderWrapper: {
        justifyContent: "center",
    }
});