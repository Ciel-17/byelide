export type BasicBlockType = 'hero' | 'view' | 'chart' | 'quote' | 'image'
export type ExternalBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExternalBlockType

export interface BaseBlockInfo {
  id: string
  label: string
}

// 超级标题
export interface HeroTitleBlockInfo extends BaseBlockInfo {
  type: 'hero'
  props: {
    content: string
  }
}
// 视图
export interface ViewBlockInfo extends BaseBlockInfo {
  type: 'view'
  props: {
    fields: Record<
      string,
      {
        type: string
      }
    >
    fieldProps: {
      width: number
      visible: boolean
    }[]
    data: { id: string; value: string }[]
  }
}

// 引述
export type QuoteBlockStatus = 'success' | 'warning' | 'error'
export interface QuoteBlockInfo extends BaseBlockInfo {
  type: 'quote'
  props: {
    content: string
    status: QuoteBlockStatus
  }
}

// 图片
export interface ImageBlockInfo extends BaseBlockInfo {
  type: 'image'
  props: {
    url: string
  }
}

// 图表
export type ChartType = 'echarts' | 'canvas' | 'svg'
export interface ChartBlockInfo extends BaseBlockInfo {
  type: 'chart'
  props: {
    chartType: ChartType
  }
}

export type BlockInfo =
  | HeroTitleBlockInfo
  | ViewBlockInfo
  | QuoteBlockInfo
  | ImageBlockInfo
  | ChartBlockInfo
