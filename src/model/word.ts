import Vowel from './vowel'
import RuleSymbol from './ruleSymbol'

export default interface Word {
	text: string
	vowels: Array<Vowel>
	ruleSymbols: Array<RuleSymbol>
}
