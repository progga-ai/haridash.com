import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WordCounter from "./pages/WordCounter";
import PasswordGenerator from "./pages/PasswordGenerator";
import UnitConverter from "./pages/UnitConverter";
import CaseConverter from "./pages/CaseConverter";
import AgeCalculator from "./pages/AgeCalculator";
import ColorConverter from "./pages/ColorConverter";
import LoremGenerator from "./pages/LoremGenerator";
import JsonFormatter from "./pages/JsonFormatter";
import BmiCalculator from "./pages/BmiCalculator";
import PercentageCalculator from "./pages/PercentageCalculator";
import Base64Tool from "./pages/Base64Tool";
import UrlEncoderDecoder from "./pages/UrlEncoderDecoder";
import NumberBaseConverter from "./pages/NumberBaseConverter";
import TipCalculator from "./pages/TipCalculator";
import DiscountCalculator from "./pages/DiscountCalculator";
import Stopwatch from "./pages/Stopwatch";
import RandomNumberGenerator from "./pages/RandomNumberGenerator";
import HtmlEntityTool from "./pages/HtmlEntityTool";
import TextToSlug from "./pages/TextToSlug";
import TextRepeater from "./pages/TextRepeater";
import DuplicateLineRemover from "./pages/DuplicateLineRemover";
import LineSorter from "./pages/LineSorter";
import CsvToJson from "./pages/CsvToJson";
import TimeZoneConverter from "./pages/TimeZoneConverter";
import HashGenerator from "./pages/HashGenerator";
import RegexTester from "./pages/RegexTester";
import MarkdownPreview from "./pages/MarkdownPreview";
import UuidGenerator from "./pages/UuidGenerator";
import JwtDecoder from "./pages/JwtDecoder";
import CssMinifier from "./pages/CssMinifier";
import JsMinifier from "./pages/JsMinifier";
import SqlFormatter from "./pages/SqlFormatter";
import EpochConverter from "./pages/EpochConverter";
import BoxShadowGenerator from "./pages/BoxShadowGenerator";
import GradientGenerator from "./pages/GradientGenerator";
import MetaTagGenerator from "./pages/MetaTagGenerator";
import ChmodCalculator from "./pages/ChmodCalculator";
import DiffChecker from "./pages/DiffChecker";
import PixelToRem from "./pages/PixelToRem";
import JsonToCsv from "./pages/JsonToCsv";
import XmlFormatter from "./pages/XmlFormatter";
import StringEscape from "./pages/StringEscape";
import ColorPaletteGenerator from "./pages/ColorPaletteGenerator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/word-counter" element={<WordCounter />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/unit-converter" element={<UnitConverter />} />
          <Route path="/case-converter" element={<CaseConverter />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
          <Route path="/color-converter" element={<ColorConverter />} />
          <Route path="/lorem-generator" element={<LoremGenerator />} />
          <Route path="/json-formatter" element={<JsonFormatter />} />
          <Route path="/bmi-calculator" element={<BmiCalculator />} />
          <Route path="/percentage-calculator" element={<PercentageCalculator />} />
          <Route path="/base64" element={<Base64Tool />} />
          <Route path="/url-encoder" element={<UrlEncoderDecoder />} />
          <Route path="/number-base" element={<NumberBaseConverter />} />
          <Route path="/tip-calculator" element={<TipCalculator />} />
          <Route path="/discount-calculator" element={<DiscountCalculator />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/random-number" element={<RandomNumberGenerator />} />
          <Route path="/html-entity" element={<HtmlEntityTool />} />
          <Route path="/text-to-slug" element={<TextToSlug />} />
          <Route path="/text-repeater" element={<TextRepeater />} />
          <Route path="/duplicate-remover" element={<DuplicateLineRemover />} />
          <Route path="/line-sorter" element={<LineSorter />} />
          <Route path="/csv-to-json" element={<CsvToJson />} />
          <Route path="/time-zone" element={<TimeZoneConverter />} />
          <Route path="/hash-generator" element={<HashGenerator />} />
          <Route path="/regex-tester" element={<RegexTester />} />
          <Route path="/markdown-preview" element={<MarkdownPreview />} />
          <Route path="/uuid-generator" element={<UuidGenerator />} />
          <Route path="/jwt-decoder" element={<JwtDecoder />} />
          <Route path="/css-minifier" element={<CssMinifier />} />
          <Route path="/js-minifier" element={<JsMinifier />} />
          <Route path="/sql-formatter" element={<SqlFormatter />} />
          <Route path="/epoch-converter" element={<EpochConverter />} />
          <Route path="/box-shadow" element={<BoxShadowGenerator />} />
          <Route path="/gradient-generator" element={<GradientGenerator />} />
          <Route path="/meta-tag" element={<MetaTagGenerator />} />
          <Route path="/chmod-calculator" element={<ChmodCalculator />} />
          <Route path="/diff-checker" element={<DiffChecker />} />
          <Route path="/px-to-rem" element={<PixelToRem />} />
          <Route path="/json-to-csv" element={<JsonToCsv />} />
          <Route path="/xml-formatter" element={<XmlFormatter />} />
          <Route path="/string-escape" element={<StringEscape />} />
          <Route path="/color-palette" element={<ColorPaletteGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
