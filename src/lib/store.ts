import { create } from 'zustand';

type SvgState = {
  svgContent: string | null;
  setSvg: (content: string) => void;
  clear: () => void;
};

export const useSvgStore = create<SvgState>((set) => ({
  svgContent: null,
  setSvg: (content) => set({ svgContent: content }),
  clear: () => set({ svgContent: null }),
}));