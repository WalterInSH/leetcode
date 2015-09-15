public class Solution {
    public String longestCommonPrefix(String[] strs) {
        if(strs.length == 0){
            return "";
        }
        String commonPrefix = "";
        for(int i = 0; i < strs[0].length(); i++){
            char pre = strs[0].charAt(i);
            for(int k = 0; k < strs.length; k++){
                if(strs[k].length() - 1 < i || strs[k].charAt(i) != pre){
                    return commonPrefix;
                }
            }
            commonPrefix = strs[0].substring(0,i+1);
        }
        return commonPrefix;
    }
}
