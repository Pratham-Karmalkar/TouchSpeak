package main

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql"
)

func locaDatabase() {
	var (
		uid         int
		uname, upwd string
	)

	db, err := sql.Open("mysql", "root:mybench@tcp(localhost:3306)/vforv")
	if err != nil {
		fmt.Println("error validating sql.Open arguments")
		panic(err.Error())
	} else {
		fmt.Printf("SUCCESS")
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		fmt.Println("error verifying connection with db.Ping")
		panic(err.Error())
	}

	insert, err := db.Query("INSERT INTO `vforv`.`users` (`uid`, `uname`, `upwd`) VALUES ('3', 'Carl', 'Jones');")
	if err != nil {
		panic(err.Error())
	}
	defer insert.Close()

	sel, err := db.Query("Select uid,uname,upwd From users;")

	for sel.Next() {
		err := sel.Scan(&uid, &uname, &upwd)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(uid, uname, upwd)
	}
	if err != nil {
		panic(err.Error())
	}
	sel.Next()
	defer sel.Close()

}

func insert(uid int, uname string, upwd string) {
	db, err := sql.Open("mysql", "root:mybench@tcp(localhost:3306)/vforv")
	fmt.Scan(&uid, uname, &upwd)
	insert, err := db.Query("INSERT INTO `vforv`.`users` (`uid`, `uname`, `upwd`) VALUES ('?', '?', '?');")
	insert.Exec()
	if err != nil {
		panic(err.Error())
	}
	defer insert.Close()
}
