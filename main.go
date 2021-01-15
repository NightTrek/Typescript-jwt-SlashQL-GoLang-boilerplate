package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

func hello(w http.ResponseWriter, req *http.Request) {

	ctx := req.Context()
	fmt.Println("server: hello handler started")
	defer fmt.Println("server: hello handler ended")

	select {
	case <-time.After(10 * time.Second):
		fmt.Fprintf(w, "hello\n")
	case <-ctx.Done():

		err := ctx.Err()
		fmt.Println("server:", err)
		internalError := http.StatusInternalServerError
		http.Error(w, err.Error(), internalError)
	}
}

func serveBuild(w http.ResponseWriter, req *http.Request) {

}

func main() {

	http.HandleFunc("/hello", hello)
	http.Handle("/", http.FileServer(http.Dir("./socialreading/build")))

	log.Fatal(http.ListenAndServe(":8001", nil))
}
