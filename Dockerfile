FROM golang:1.16 

WORKDIR /app
COPY ./src .
RUN GOOS=linux go build -ldflags="-s -w"

FROM scratch
WORKDIR /app
COPY --from=builder  /app .
ENTRYPOINT [ "./app" ]