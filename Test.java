class Test {
    public static void main(String[] args) {
        int[] array = {3,2,1,5,6,1};
        mergeSort(array);
        for(int i : array){
            System.out.println(i);
        }
    }
    //合并排序 Mergesort 分治法
    public static void mergeSort(int[] array){
        int[] temp = new int[array.length];
        mergeSort(array, 0, array.length - 1, temp);

    }
    private static void mergeSort(int[] array, int left, int right, int[] temp){
        if(left < right){
            int mid = left + (right - left) / 2;
            mergeSort(array, left, mid, temp);
            mergeSort(array, mid + 1, right, temp);
            merge(array, left, mid, right, temp);
        }
    }
    private static void merge(int[] array, int left, int mid, int right, int[] temp){
        int leftStart = left;
        int rightStart = mid +1;
        int index = 0;//临时数组起点
        while(leftStart <= mid && rightStart <= right){
            if(array[leftStart] < array[rightStart]){
                temp[index++] = array[leftStart];
                leftStart++;
            } else {
                temp[index++] = array[rightStart];
                rightStart++;
            }
        }
        while(leftStart <= mid){
            temp[index++] = array[leftStart++];
        }
        while(rightStart <= right){
            temp[index++] = array[rightStart++];
        }

        index = 0;
        while(left <= right){
            array[left++] = temp[index++];
        }
    }
}