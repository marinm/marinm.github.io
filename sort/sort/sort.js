import { bubbleSort } from "./bubble-sort.js";
import { insertionSort } from "./insertion-sort.js";
import { mergeSort } from "./merge-sort.js";
import { quicksort } from "./quicksort.js";

const SORTS = {
	"bubble-sort": bubbleSort,
	"insertion-sort": insertionSort,
	"merge-sort": mergeSort,
	"quick-sort": quicksort,
};

export function sort(algorithm, values, interrupt) {
	return SORTS[algorithm](values, interrupt);
}
