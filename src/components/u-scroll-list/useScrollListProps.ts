interface ScrollListProps {
	// 指示器的整体宽度
	indicatorWidth ?: string | number
	// 滑块的宽度
	indicatorBarWidth ?: string | number
	// 是否显示面板指示器
	indicator ?: boolean
	// 指示器非激活颜色
	indicatorColor ?: string
	// 指示器的激活颜色
	indicatorActiveColor ?: string
	// 指示器样式，可通过bottom，left，right进行定位
	indicatorStyle ?: string | object
}

const useScrollListProps = withDefaults(defineProps<ScrollListProps>(), {
	indicatorWidth: 50,
	indicatorBarWidth: 20,
	indicator: true,
	indicatorColor: '#f2f2f2',
	indicatorActiveColor: '#3c9cff',
	indicatorStyle: ''
})

export { useScrollListProps }