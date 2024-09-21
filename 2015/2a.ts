const input = [
  [29, 13, 26],
  [11, 11, 14],
  [27, 2, 5],
  [6, 10, 13],
  [15, 19, 10],
  [26, 29, 15],
  [8, 23, 6],
  [17, 8, 26],
  [20, 28, 3],
  [23, 12, 24],
  [11, 17, 3],
  [19, 23, 28],
  [25, 2, 25],
  [1, 15, 3],
  [25, 14, 4],
  [23, 10, 23],
  [29, 19, 7],
  [17, 10, 13],
  [26, 30, 4],
  [16, 7, 16],
  [7, 5, 27],
  [8, 23, 6],
  [2, 20, 2],
  [18, 4, 24],
  [30, 2, 26],
  [6, 14, 23],
  [10, 23, 9],
  [29, 29, 22],
  [1, 21, 14],
  [22, 10, 13],
  [10, 12, 10],
  [20, 13, 11],
  [12, 2, 14],
  [2, 16, 29],
  [27, 18, 26],
  [6, 12, 20],
  [18, 17, 8],
  [14, 25, 1],
  [30, 15, 22],
  [17, 18, 7],
  [28, 23, 24],
  [15, 12, 25],
  [14, 7, 20],
  [29, 23, 8],
  [24, 5, 22],
  [6, 22, 8],
  [1, 15, 26],
  [14, 5, 1],
  [24, 28, 28],
  [17, 23, 23],
  [4, 15, 7],
  [23, 8, 11],
  [6, 15, 1],
  [23, 18, 13],
  [17, 1, 26],
  [23, 13, 17],
  [2, 18, 8],
  [22, 22, 1],
  [10, 22, 6],
  [28, 29, 20],
  [22, 21, 25],
  [14, 8, 23],
  [12, 30, 14],
  [8, 7, 5],
  [3, 30, 15],
  [4, 3, 29],
  [25, 18, 3],
  [16, 7, 16],
  [4, 3, 8],
  [9, 16, 30],
  [20, 28, 3],
  [28, 24, 6],
  [4, 18, 2],
  [23, 18, 5],
  [22, 4, 30],
  [15, 30, 9],
  [7, 12, 12],
  [3, 22, 29],
  [12, 1, 9],
  [9, 2, 25],
  [17, 11, 10],
  [25, 24, 7],
  [7, 27, 26],
  [26, 4, 12],
  [29, 2, 26],
  [19, 24, 12],
  [23, 23, 3],
  [26, 28, 16],
  [18, 4, 16],
  [25, 30, 18],
  [29, 19, 19],
  [16, 3, 27],
  [29, 25, 29],
  [18, 19, 5],
  [14, 21, 30],
  [19, 13, 26],
  [19, 10, 15],
  [9, 4, 7],
  [18, 6, 6],
  [24, 25, 29],
  [9, 12, 27],
  [15, 3, 22],
  [30, 17, 21],
  [18, 19, 28],
  [9, 11, 12],
  [8, 28, 22],
  [11, 3, 4],
  [28, 17, 20],
  [24, 18, 15],
  [11, 12, 13],
  [6, 19, 24],
  [28, 4, 5],
  [28, 22, 23],
  [13, 29, 2],
  [9, 16, 15],
  [29, 28, 1],
  [10, 18, 30],
  [19, 11, 12],
  [26, 28, 25],
  [23, 17, 13],
  [25, 1, 21],
  [17, 1, 27],
  [17, 27, 28],
  [28, 13, 15],
  [14, 13, 25],
  [11, 29, 7],
  [22, 29, 5],
  [13, 6, 14],
  [23, 18, 13],
  [25, 7, 17],
  [18, 9, 20],
  [21, 11, 2],
  [28, 11, 13],
  [13, 25, 1],
  [19, 29, 25],
  [16, 29, 4],
  [10, 21, 10],
  [7, 25, 17],
  [5, 9, 3],
  [1, 15, 6],
  [8, 27, 29],
  [23, 6, 30],
  [22, 22, 29],
  [6, 20, 30],
  [26, 25, 29],
  [10, 19, 19],
  [20, 30, 9],
  [5, 30, 24],
  [17, 10, 27],
  [30, 14, 30],
  [8, 17, 4],
  [7, 18, 6],
  [3, 5, 4],
  [24, 17, 15],
  [14, 20, 17],
  [22, 27, 15],
  [18, 14, 15],
  [23, 9, 11],
  [21, 16, 29],
  [7, 18, 21],
  [9, 3, 29],
  [10, 13, 4],
  [2, 30, 4],
  [23, 20, 4],
  [8, 22, 21],
  [29, 28, 4],
  [13, 16, 25],
  [21, 9, 11],
  [7, 26, 26],
  [13, 23, 30],
  [19, 7, 10],
  [9, 23, 21],
  [21, 9, 17],
  [9, 21, 15],
  [20, 29, 22],
  [23, 13, 15],
  [19, 25, 2],
  [12, 11, 30],
  [20, 21, 6],
  [21, 6, 17],
  [24, 26, 9],
  [29, 21, 29],
  [29, 26, 16],
  [6, 16, 1],
  [2, 12, 6],
  [6, 7, 20],
  [7, 2, 22],
  [6, 22, 4],
  [13, 11, 27],
  [25, 27, 14],
  [11, 8, 6],
  [26, 11, 14],
  [30, 3, 29],
  [27, 21, 20],
  [15, 16, 26],
  [6, 22, 10],
  [11, 9, 25],
  [23, 13, 6],
  [13, 9, 3],
  [30, 22, 13],
  [29, 23, 14],
  [25, 19, 6],
  [7, 29, 11],
  [19, 18, 5],
  [29, 25, 13],
  [25, 24, 27],
  [1, 9, 12],
  [22, 9, 17],
  [14, 12, 28],
  [19, 21, 17],
  [13, 25, 17],
  [14, 25, 12],
  [4, 14, 30],
  [7, 15, 28],
  [3, 6, 25],
  [6, 2, 16],
  [15, 19, 11],
  [17, 30, 20],
  [20, 23, 7],
  [26, 21, 6],
  [26, 29, 24],
  [2, 4, 30],
  [4, 22, 18],
  [13, 3, 28],
  [27, 6, 21],
  [5, 3, 27],
  [12, 7, 11],
  [28, 11, 9],
  [12, 9, 2],
  [1, 22, 20],
  [15, 13, 28],
  [14, 19, 16],
  [28, 20, 3],
  [20, 4, 9],
  [26, 7, 26],
  [18, 19, 25],
  [7, 1, 13],
  [20, 23, 29],
  [27, 26, 8],
  [11, 15, 15],
  [10, 21, 23],
  [29, 2, 11],
  [21, 28, 20],
  [3, 18, 23],
  [26, 17, 17],
  [14, 26, 17],
  [20, 7, 17],
  [18, 12, 8],
  [4, 8, 8],
  [8, 15, 23],
  [24, 29, 5],
  [1, 25, 8],
  [1, 28, 17],
  [16, 18, 13],
  [29, 24, 22],
  [13, 16, 10],
  [14, 7, 16],
  [15, 11, 29],
  [12, 15, 19],
  [17, 6, 28],
  [4, 3, 9],
  [15, 16, 8],
  [29, 27, 11],
  [2, 24, 20],
  [4, 21, 3],
  [29, 24, 27],
  [18, 22, 22],
  [7, 8, 18],
  [20, 7, 8],
  [19, 9, 2],
  [20, 17, 2],
  [2, 29, 10],
  [19, 25, 1],
  [28, 9, 3],
  [29, 27, 20],
  [7, 21, 7],
  [10, 4, 22],
  [26, 8, 5],
  [26, 14, 1],
  [5, 27, 9],
  [2, 18, 3],
  [3, 27, 17],
  [30, 17, 23],
  [30, 11, 20],
  [4, 6, 7],
  [6, 29, 27],
  [30, 16, 20],
  [24, 30, 28],
  [19, 20, 26],
  [18, 1, 25],
  [26, 12, 12],
  [19, 15, 29],
  [16, 21, 24],
  [23, 13, 26],
  [25, 16, 10],
  [8, 9, 18],
  [24, 14, 1],
  [24, 15, 21],
  [19, 9, 14],
  [8, 23, 11],
  [22, 2, 16],
  [29, 9, 26],
  [3, 16, 25],
  [15, 20, 30],
  [3, 11, 12],
  [15, 2, 3],
  [13, 7, 4],
  [2, 7, 27],
  [9, 26, 11],
  [30, 24, 19],
  [28, 17, 21],
  [10, 8, 2],
  [11, 15, 26],
  [10, 12, 20],
  [24, 24, 27],
  [25, 26, 16],
  [13, 4, 20],
  [25, 13, 11],
  [12, 22, 3],
  [20, 7, 1],
  [12, 18, 6],
  [26, 8, 20],
  [14, 2, 7],
  [23, 12, 1],
  [26, 24, 24],
  [27, 26, 23],
  [26, 17, 5],
  [17, 24, 2],
  [26, 5, 6],
  [23, 5, 1],
  [5, 18, 30],
  [24, 21, 19],
  [5, 28, 11],
  [21, 20, 14],
  [25, 4, 22],
  [26, 24, 11],
  [7, 5, 8],
  [13, 1, 30],
  [5, 1, 6],
  [14, 5, 2],
  [8, 11, 7],
  [13, 20, 1],
  [17, 30, 14],
  [29, 22, 10],
  [12, 26, 3],
  [27, 17, 3],
  [26, 27, 4],
  [5, 26, 17],
  [22, 11, 19],
  [8, 26, 3],
  [24, 19, 22],
  [7, 1, 4],
  [6, 27, 30],
  [4, 28, 14],
  [16, 14, 18],
  [4, 5, 20],
  [19, 25, 4],
  [15, 15, 1],
  [10, 14, 14],
  [16, 18, 24],
  [21, 27, 15],
  [5, 5, 10],
  [1, 7, 13],
  [16, 2, 8],
  [13, 15, 11],
  [3, 25, 10],
  [20, 29, 8],
  [12, 3, 2],
  [10, 13, 12],
  [25, 27, 1],
  [11, 30, 19],
  [7, 19, 13],
  [27, 6, 18],
  [16, 21, 19],
  [21, 29, 5],
  [16, 23, 12],
  [29, 19, 15],
  [5, 5, 10],
  [27, 15, 1],
  [13, 16, 22],
  [29, 19, 5],
  [8, 12, 9],
  [3, 18, 5],
  [13, 25, 3],
  [5, 9, 21],
  [10, 20, 16],
  [9, 9, 11],
  [23, 21, 1],
  [22, 2, 15],
  [27, 8, 13],
  [23, 7, 3],
  [26, 30, 15],
  [29, 15, 16],
  [16, 27, 13],
  [2, 18, 9],
  [10, 27, 8],
  [20, 9, 25],
  [10, 2, 17],
  [16, 13, 13],
  [21, 26, 1],
  [27, 26, 24],
  [9, 30, 16],
  [19, 17, 28],
  [25, 15, 1],
  [10, 26, 6],
  [10, 11, 11],
  [5, 26, 25],
  [30, 4, 15],
  [9, 8, 23],
  [14, 25, 7],
  [8, 28, 8],
  [28, 18, 24],
  [4, 4, 25],
  [16, 25, 11],
  [17, 27, 8],
  [15, 16, 9],
  [24, 13, 21],
  [17, 3, 27],
  [27, 5, 26],
  [8, 27, 12],
  [29, 2, 8],
  [24, 23, 30],
  [1, 30, 21],
  [6, 18, 20],
  [13, 14, 12],
  [25, 30, 23],
  [24, 6, 24],
  [12, 7, 21],
  [11, 6, 8],
  [8, 30, 30],
  [26, 3, 12],
  [28, 6, 5],
  [18, 7, 1],
  [7, 6, 20],
  [14, 16, 18],
  [11, 22, 15],
  [4, 20, 10],
  [19, 24, 19],
  [8, 24, 11],
  [4, 9, 10],
  [6, 6, 22],
  [10, 9, 29],
  [1, 5, 28],
  [19, 25, 29],
  [20, 30, 3],
  [15, 13, 13],
  [9, 9, 24],
  [20, 14, 29],
  [26, 24, 13],
  [2, 25, 8],
  [10, 26, 2],
  [12, 19, 12],
  [18, 6, 20],
  [4, 5, 14],
  [26, 27, 10],
  [16, 26, 20],
  [3, 21, 15],
  [2, 26, 18],
  [14, 11, 17],
  [26, 26, 25],
  [10, 1, 11],
  [17, 19, 19],
  [27, 28, 26],
  [9, 2, 10],
  [19, 30, 15],
  [23, 30, 14],
  [15, 3, 20],
  [2, 14, 22],
  [21, 18, 8],
  [22, 4, 29],
  [19, 6, 29],
  [9, 26, 29],
  [16, 10, 9],
  [22, 12, 22],
  [13, 28, 14],
  [25, 14, 28],
  [28, 3, 30],
  [10, 17, 1],
  [10, 27, 22],
  [10, 23, 19],
  [14, 25, 9],
  [11, 24, 8],
  [30, 25, 10],
  [22, 13, 28],
  [2, 7, 6],
  [11, 20, 8],
  [9, 22, 14],
  [19, 16, 9],
  [11, 24, 4],
  [11, 17, 2],
  [6, 4, 10],
  [26, 10, 10],
  [12, 14, 5],
  [27, 10, 3],
  [15, 3, 6],
  [11, 7, 19],
  [22, 10, 12],
  [21, 26, 10],
  [13, 20, 3],
  [27, 8, 8],
  [1, 24, 23],
  [24, 9, 22],
  [23, 17, 23],
  [3, 28, 19],
  [2, 20, 28],
  [23, 17, 24],
  [26, 1, 4],
  [4, 1, 12],
  [5, 6, 16],
  [13, 22, 13],
  [25, 21, 21],
  [20, 21, 12],
  [9, 24, 25],
  [17, 16, 12],
  [12, 28, 9],
  [18, 16, 27],
  [29, 12, 2],
  [30, 12, 15],
  [24, 11, 10],
  [4, 9, 22],
  [4, 24, 5],
  [19, 11, 5],
  [6, 25, 6],
  [1, 20, 17],
  [22, 8, 21],
  [11, 26, 4],
  [16, 19, 3],
  [8, 12, 8],
  [13, 2, 18],
  [10, 5, 11],
  [8, 12, 17],
  [21, 2, 5],
  [26, 17, 26],
  [23, 18, 17],
  [28, 11, 14],
  [1, 4, 27],
  [29, 5, 28],
  [5, 9, 10],
  [5, 7, 25],
  [20, 15, 27],
  [15, 11, 17],
  [12, 14, 1],
  [29, 14, 4],
  [18, 14, 18],
  [14, 25, 24],
  [26, 14, 18],
  [13, 8, 11],
  [30, 1, 23],
  [3, 4, 12],
  [12, 24, 9],
  [8, 6, 16],
  [14, 15, 30],
  [12, 30, 8],
  [22, 11, 18],
  [16, 30, 28],
  [17, 18, 4],
  [13, 14, 23],
  [2, 28, 8],
  [3, 28, 30],
  [29, 30, 8],
  [4, 6, 26],
  [6, 30, 17],
  [11, 30, 30],
  [19, 4, 3],
  [12, 15, 20],
  [22, 28, 4],
  [26, 30, 2],
  [6, 12, 7],
  [1, 10, 5],
  [25, 29, 7],
  [17, 9, 18],
  [16, 21, 29],
  [21, 14, 7],
  [15, 16, 11],
  [26, 6, 15],
  [8, 24, 7],
  [2, 20, 4],
  [2, 9, 3],
  [19, 8, 13],
  [18, 7, 22],
  [27, 14, 17],
  [2, 13, 8],
  [18, 15, 26],
  [15, 27, 27],
  [18, 11, 15],
  [1, 29, 20],
  [21, 12, 11],
  [20, 2, 15],
  [28, 23, 9],
  [1, 1, 17],
  [7, 23, 9],
  [30, 9, 27],
  [9, 16, 18],
  [15, 24, 28],
  [30, 11, 18],
  [29, 26, 10],
  [9, 5, 25],
  [2, 1, 19],
  [14, 3, 14],
  [6, 3, 6],
  [30, 15, 20],
  [20, 17, 27],
  [28, 10, 9],
  [14, 24, 28],
  [17, 11, 6],
  [12, 3, 6],
  [8, 8, 15],
  [23, 14, 21],
  [11, 21, 7],
  [5, 13, 30],
  [4, 29, 25],
  [30, 28, 24],
  [18, 4, 9],
  [3, 15, 6],
  [13, 9, 19],
  [30, 14, 7],
  [7, 9, 9],
  [17, 11, 26],
  [24, 26, 13],
  [16, 21, 16],
  [27, 17, 25],
  [2, 21, 11],
  [9, 11, 27],
  [3, 3, 7],
  [13, 8, 14],
  [20, 20, 26],
  [13, 29, 22],
  [30, 11, 1],
  [7, 10, 19],
  [27, 5, 9],
  [23, 17, 15],
  [21, 6, 13],
  [24, 15, 16],
  [18, 4, 14],
  [18, 16, 6],
  [22, 11, 18],
  [14, 2, 5],
  [15, 3, 7],
  [10, 20, 29],
  [16, 1, 10],
  [30, 23, 1],
  [10, 15, 11],
  [17, 14, 5],
  [22, 8, 13],
  [7, 11, 28],
  [26, 17, 3],
  [2, 23, 2],
  [28, 13, 19],
  [18, 12, 28],
  [22, 23, 16],
  [14, 12, 1],
  [20, 8, 19],
  [17, 19, 13],
  [29, 2, 12],
  [2, 26, 27],
  [29, 16, 4],
  [13, 8, 18],
  [16, 15, 30],
  [23, 16, 2],
  [28, 8, 27],
  [21, 8, 23],
  [13, 20, 26],
  [19, 6, 17],
  [17, 30, 15],
  [7, 4, 30],
  [2, 13, 30],
  [18, 7, 19],
  [4, 13, 27],
  [8, 6, 5],
  [18, 20, 25],
  [2, 3, 30],
  [23, 27, 13],
  [22, 30, 4],
  [23, 25, 25],
  [23, 16, 19],
  [25, 3, 1],
  [5, 6, 15],
  [11, 29, 12],
  [25, 24, 7],
  [16, 7, 20],
  [20, 3, 2],
  [12, 27, 15],
  [16, 10, 12],
  [1, 3, 14],
  [22, 1, 26],
  [2, 24, 18],
  [11, 29, 16],
  [15, 2, 9],
  [10, 1, 24],
  [21, 8, 11],
  [30, 11, 23],
  [6, 30, 21],
  [13, 27, 29],
  [14, 6, 5],
  [18, 29, 19],
  [12, 4, 28],
  [29, 3, 14],
  [10, 30, 28],
  [5, 7, 15],
  [14, 1, 10],
  [9, 25, 14],
  [7, 24, 18],
  [28, 17, 21],
  [18, 13, 25],
  [26, 15, 1],
  [21, 1, 19],
  [12, 16, 21],
  [4, 6, 13],
  [7, 15, 26],
  [17, 19, 5],
  [12, 28, 2],
  [1, 20, 19],
  [27, 7, 5],
  [17, 26, 8],
  [12, 15, 19],
  [5, 23, 10],
  [8, 2, 8],
  [16, 13, 12],
  [14, 27, 1],
  [26, 29, 3],
  [24, 16, 14],
  [14, 13, 13],
  [7, 22, 23],
  [2, 9, 30],
  [4, 27, 8],
  [26, 27, 15],
  [23, 1, 6],
  [25, 29, 18],
  [5, 18, 1],
  [20, 8, 20],
  [5, 10, 25],
  [30, 25, 15],
  [7, 22, 25],
  [28, 26, 17],
  [29, 4, 1],
  [21, 11, 27],
  [20, 9, 8],
  [25, 22, 12],
  [2, 11, 11],
  [23, 2, 16],
  [23, 27, 20],
  [2, 13, 28],
  [27, 2, 24],
  [11, 1, 17],
  [12, 4, 27],
  [16, 20, 22],
  [30, 12, 10],
  [5, 15, 4],
  [5, 2, 27],
  [12, 4, 25],
  [1, 16, 4],
  [27, 4, 4],
  [21, 16, 3],
  [27, 26, 3],
  [24, 6, 6],
  [24, 12, 12],
  [20, 20, 25],
  [8, 29, 2],
  [21, 4, 5],
  [2, 4, 8],
  [4, 13, 19],
  [3, 20, 10],
  [12, 15, 16],
  [6, 5, 4],
  [12, 16, 20],
  [22, 19, 17],
  [8, 17, 22],
  [25, 16, 15],
  [7, 1, 19],
  [10, 1, 7],
  [23, 23, 5],
  [28, 6, 12],
  [2, 25, 12],
  [10, 27, 12],
  [24, 27, 19],
  [14, 14, 20],
  [4, 1, 5],
  [16, 27, 29],
  [20, 20, 24],
  [28, 24, 30],
  [6, 15, 15],
  [9, 15, 30],
  [23, 26, 3],
  [17, 24, 21],
  [22, 25, 25],
  [18, 29, 10],
  [20, 25, 1],
  [24, 11, 16],
  [20, 7, 21],
  [20, 7, 9],
  [7, 26, 2],
  [5, 18, 1],
  [16, 26, 28],
  [4, 10, 18],
  [27, 30, 21],
  [26, 9, 9],
  [8, 16, 14],
  [6, 27, 8],
  [28, 9, 20],
  [13, 13, 4],
  [9, 18, 16],
  [18, 15, 18],
  [22, 19, 14],
  [14, 10, 17],
  [25, 29, 11],
  [1, 18, 19],
  [8, 11, 26],
  [18, 6, 14],
  [30, 24, 13],
  [27, 1, 27],
  [15, 9, 3],
  [2, 29, 17],
  [2, 26, 21],
  [22, 9, 9],
  [20, 20, 20],
  [22, 28, 2],
  [26, 5, 16],
  [11, 3, 14],
  [21, 16, 16],
  [18, 26, 7],
  [18, 30, 6],
  [7, 11, 12],
  [15, 10, 2],
  [27, 2, 16],
  [27, 30, 24],
  [28, 14, 24],
  [7, 4, 8],
  [6, 28, 15],
  [13, 19, 1],
  [22, 26, 30],
  [7, 30, 24],
  [2, 17, 21],
  [19, 26, 2],
  [19, 24, 15],
  [14, 23, 2],
  [21, 27, 15],
  [30, 15, 14],
  [21, 29, 5],
  [23, 30, 2],
  [4, 1, 2],
  [15, 5, 13],
  [21, 2, 30],
  [20, 7, 16],
  [1, 21, 25],
  [2, 25, 1],
  [12, 29, 5],
  [28, 13, 16],
  [26, 3, 12],
  [29, 20, 23],
  [28, 12, 20],
  [4, 30, 8],
  [16, 15, 16],
  [6, 16, 29],
  [2, 28, 13],
  [24, 25, 2],
  [26, 15, 22],
  [17, 20, 11],
  [18, 12, 7],
  [19, 1, 18],
  [8, 27, 13],
  [22, 16, 8],
  [19, 26, 17],
  [13, 11, 10],
  [22, 12, 3],
  [13, 12, 14],
  [29, 17, 9],
  [6, 14, 10],
  [14, 20, 10],
  [8, 26, 9],
  [25, 13, 22],
  [3, 30, 25],
  [14, 28, 1],
  [30, 29, 12],
  [3, 17, 15],
  [3, 24, 14],
  [28, 24, 22],
  [16, 6, 1],
  [20, 25, 14],
  [17, 17, 13],
  [6, 19, 27],
  [10, 15, 20],
  [8, 23, 20],
  [7, 29, 21],
  [18, 9, 25],
  [10, 5, 22],
  [2, 27, 27],
  [16, 18, 30],
  [15, 5, 12],
  [26, 29, 29],
  [28, 11, 10],
  [9, 29, 28],
  [24, 15, 23],
  [26, 9, 10],
  [5, 1, 25],
  [22, 27, 16],
  [7, 29, 3],
  [1, 3, 5],
  [8, 7, 29],
  [19, 21, 11],
  [28, 13, 30],
  [17, 16, 20],
  [5, 10, 25],
  [9, 14, 15],
  [15, 14, 23],
  [16, 4, 17],
  [21, 8, 2],
  [9, 9, 8],
  [22, 22, 4],
  [10, 2, 27],
  [12, 19, 10],
  [15, 29, 4],
  [22, 14, 7],
  [29, 18, 5],
  [1, 7, 27],
  [24, 1, 15],
  [23, 23, 26],
  [12, 17, 23],
  [26, 10, 24],
  [8, 22, 2],
  [8, 1, 10],
  [22, 19, 12],
  [2, 23, 13],
  [11, 27, 25],
  [26, 15, 27],
  [27, 7, 21],
  [18, 9, 6],
  [22, 21, 22],
  [7, 12, 26],
  [23, 21, 13],
  [14, 3, 8],
  [5, 9, 28],
  [29, 29, 15],
  [27, 25, 23],
  [12, 2, 24],
  [8, 2, 20],
  [29, 19, 4],
  [12, 24, 29],
  [2, 27, 28],
  [14, 20, 9],
  [28, 6, 25],
  [18, 29, 8],
  [19, 11, 30],
  [15, 11, 23],
  [18, 7, 7],
  [14, 20, 14],
  [26, 18, 22],
  [27, 25, 13],
  [12, 10, 30],
  [30, 2, 7],
  [28, 10, 1],
  [18, 10, 30],
  [22, 11, 5],
  [22, 16, 3],
  [25, 15, 9],
  [5, 10, 24],
  [4, 28, 8],
  [19, 24, 18],
  [3, 4, 25],
  [14, 4, 30],
  [11, 26, 3],
  [12, 12, 12],
  [26, 7, 24],
  [3, 2, 14],
  [1, 27, 7],
  [2, 2, 13],
  [3, 26, 26],
  [12, 4, 11],
  [12, 17, 20],
  [4, 19, 30],
  [5, 18, 10],
  [17, 6, 18],
  [19, 30, 20],
  [11, 2, 17],
  [30, 13, 19],
  [22, 23, 7],
  [17, 28, 2],
  [5, 17, 30],
  [7, 11, 4],
  [21, 26, 18],
  [15, 28, 4],
  [5, 6, 27],
  [12, 6, 16],
  [9, 17, 12],
  [27, 20, 5],
  [14, 5, 20],
  [27, 14, 6],
  [2, 14, 21],
  [4, 28, 30],
  [24, 5, 1],
  [19, 29, 29],
  [11, 23, 1],
  [8, 16, 21],
  [3, 17, 19],
  [10, 13, 5],
  [20, 21, 16],
  [23, 3, 6],
  [27, 26, 11],
  [3, 2, 22],
  [14, 3, 5],
  [10, 9, 8],
];

function getSurfaceArea([a, b, c]: number[]) {
  const x = a * b;
  const y = b * c;
  const z = a * c;
  return 2 * (x + y + z) + Math.min(x, y, z);
}

function solution(input: number[][]): number {
  return input.reduce((a, b) => a + getSurfaceArea(b), 0);
}

console.log(solution(input));
