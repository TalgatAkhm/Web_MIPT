package main

import(
	"unicode"
	)

func RemoveEven(inputArray [] int) int[] {
	slice:=make([]int,0)
	for i:= range inputArray {
		if inputArray[i]%2 != 0 {
			slice = append(slice, inputArray[i])
		}
	}
	
	return slice
}

func PowerGenerator(a int) func() int {
	temp_a:=a
	return func() (pow int) {
		pow = temp_a
		temp_a = temp_a * a
		return
	}
}


func DifferentWordsCount(inp_s string) int {
	wordsSet := make([]string, 1)
	var iterator_j = 0
	var isNotWord = false
	ZERO_JOINER := ""
	
	for i:= range inp_s {
		if unicode.IsLetter(rune(inp_s[i])){
		
			wordsSet[iterator_j] = wordsSet[iterator_j] + string(unicode.ToLower(rune(inp_s[i])))
			isNotWord = false
			
		} else if !isNotWord {
			iterator_j++
			wordsSet = append(wordsSet, ZERO_JOINER)
			isNotWord = true
		}
	}
	
	result := make(map[string]int)
	for i := 0; i < len(wordsSet); i++ {
		if wordsSet[i] != ZERO_JOINER {
			result[wordsSet[i]]++
		}
	}
	return len(result)
}
